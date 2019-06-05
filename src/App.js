import React from 'react';
import logo from './logo.svg';
import koala from './my-koala.jpg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helloType : '',
      koalaSaying :'',
      isModalOpen : false
    };
  }

  // リストからランダムに一つアイテムを返す。
  random(list) {
    if (!list) {
      return false;
    }
    const randNum = Math.floor(Math.random()* list.length );
    return(list[randNum]);
  }

  handleClick(helloType) {
    let koalaSayingList;
    helloType -= 0;
    this.setState({
      helloType: helloType
    });
    switch (helloType) {
      case 0:
        koalaSayingList = [
          'おはコアラ(*´ω｀*)',
          'おはドアラʕ•͡દ•ʔ ',
          'zzz…(˘ω˘ ≡ ˘ω˘) ',
          'おはにゃん(^·ｪ·^)'
        ];
        break;
      case 1:
        koalaSayingList = [
          'いってらコアラ(*´ω｀*)',
          '今日も頑張れコアラᕙ( ͡° ͜ʖ ͡°)ᕗ',
          'もう行っちゃうのかコアラ?(°д°)'
        ];
        break;
      case 2:
        koalaSayingList = [
          'こんにちコアラ(`·⊝·´ )',
          'お腹すいた…|ω`)',
          'こんちくわ( ·∀·)',
          'コアラのマーチ┗=͟͟͞͞( ˙∀˙)=͟͟͞͞┛'
        ];
        break;
      case 3:
        koalaSayingList = [
          'おつカレーコアラ(*´ω｀*)',
          '今日もよく頑張ったのだ(❁´ω`❁)',
          '( ˘ω˘ )つ[ｵﾌﾄｩﾝ]',
          '( ˘ω˘ )つ[ﾕｰｶﾘ]'
        ];
        break;
      case 4:
        koalaSayingList = [
          'おやすみコアラ(ﾟДﾟ)ﾉ',
          'くそねみコアラ(˘ω˘)',
          '(。-ω-)zzz…（もう寝ている）'
        ];
        break;
      default:
        koalaSayingList = null;
        console.log(helloType);
    }
    
    if (koalaSayingList) {
      koalaSayingList.push("(   'ч' )ﾑｼｬﾑｼｬ（ユーカリを食べる音")
      const koalaSaying = this.random(koalaSayingList);
      
      this.setState({
        koalaSaying: koalaSaying,
        isModalOpen: true
      });
    } else {
      console.log('handleClick() args is invalid！');
    }
  }
  
  render() {
    let htmlBtns = [];
    const dataBtn = [
      'おはよう',
      'いってきます',
      'こんにちは',
      'しごおわ',
      'おやすみ'
    ];
    for (const i in dataBtn) {
      htmlBtns.push(
        <li>
          <button key={i}
            onClick={() => {this.handleClick(i)}}
          >{dataBtn[i]}！</button>
        </li>
      );
    }
    let htmlModal;
    if (this.state.isModalOpen) {
      htmlModal = (
        <div className="modalWrap">
          <div className="modal">
            <div className="modal-flex">
              <img src={koala} className="modal-img" alt=""/>
              <p className="modal-text">「{this.state.koalaSaying}」</p>
            </div>
            <button className="modal-share" onClick={() => {
              window.open(`https://twitter.com/share?url=${urlPage}&text= コアラに「${dataBtn[this.state.helloType]}」と挨拶しました！/コアラ「${this.state.koalaSaying}」/Hello! Koala!`, "SNS_window", "width=600, height=500, menubar=no, toolbar=no, scrollbars=yes");
            }}>結果をツイートする</button>
            <div className="modal-close" onClick={() => {this.setState({isModalOpen: false});}}>×</div>
          </div>
        </div>
      );
    }
    const urlPage = 'https://hello-koala.netlify.com/';
    
    return (
      <div className="App">
        <h1>Hello! Koala!</h1>
        <p>我が家のコアラです。<br />コアラに挨拶しよう！</p>
        <img src={koala} className="app-koala" alt="" />
        <ul className="btn-wrap">
          {htmlBtns}
        </ul>
        {htmlModal}
        <footer className="App-footer">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            this page is built using `React`
          </p>
        </footer>
        
      </div>
    )
  }
}

export default App;
