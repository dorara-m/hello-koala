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
    this.setState({
      helloType: helloType
    });
    switch (helloType) {
      case 'おはよう':
        koalaSayingList = [
          'おはコアラ(*´ω｀*)',
          'おはドアラʕ•͡દ•ʔ ',
          'zzz…(˘ω˘ ≡ ˘ω˘) ',
          'おはにゃん(^·ｪ·^)'
        ];
        break;
      case 'こんにちは':
        koalaSayingList = [
          'こんにちコアラ꒰๑•௰•๑꒱',
          'お腹すいた…|ω`)',
          'こんちくわ( ·∀·)',
          'コアラのマーチ┗=͟͟͞͞( ˙∀˙)=͟͟͞͞┛'
        ];
        break;
      case 'おやすみ':
        koalaSayingList = [
          'おやすみコアラ(ﾟДﾟ)ﾉ',
          'くそねみコアラ(˘ω˘)',
          '(。-ω-)zzz…（もう寝ている）'
        ];
        break;
      default:
        koalaSayingList = null;
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
    const urlPage = 'http://localhost:3000/';
    let htmlModal;
    if (this.state.isModalOpen) {
      htmlModal = (
        <div className="modalWrap">
          <div className="modal">
            <div className="modal-flex">
              <img src={koala} className="modal-img" />
              <p className="modal-text">「{this.state.koalaSaying}」</p>
            </div>
            <button className="modal-share" onClick={() => {
              window.open(`https://twitter.com/share?url=${urlPage}&text= コアラに「${this.state.helloType}」と挨拶しました！/コアラ「${this.state.koalaSaying}」/hello-koala`, "SNS_window", "width=600, height=500, menubar=no, toolbar=no, scrollbars=yes");
            }}>結果をツイートする</button>
            <a className="modal-close" onClick={() => {this.setState({isModalOpen: false});}}>×</a>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hello! Koala!</h1>
        <p>我が家のコアラです。<br />コアラに挨拶しよう！</p>
        <img src={koala} className="app-koala" />
        <div className="btn-wrap">
          <button 
            onClick={
              () => {
                this.handleClick('おはよう')
              }
            }
          >おはよう</button>
          <button 
            onClick={
              () => {
                this.handleClick('こんにちは')
              }
            }
          >こんにちは</button>
          <button 
            onClick={
              () => {
                this.handleClick('おやすみ')
              }
            }
          >おやすみ</button>
        </div>
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
