import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen : false,
      koalaSaying :'ねむい…'
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
    switch (helloType) {
      case 1:
        koalaSayingList = [
          'おはコアラ',
          'おはドアラ',
          'zzz…',
          'おはにゃん'
        ];
        break;
      case 2:
        koalaSayingList = [
          'こんにちコアラ',
          'お腹すいた…',
          'こんちくわ',
          'コアラのマーチ'
        ];
        break;
      case 3:
        koalaSayingList = [
          'おやすみコアラ',
          'くそねみコアラ',
          'zzz…（もう寝ているようだ'
        ];
        break;
      default:
        koalaSayingList = null;
    }
    
    if (koalaSayingList) {
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
        <div className="modal">
          <p className="modal-text">コアラ「{this.state.koalaSaying}」</p>
          <button onClick={() => {
            window.open(`https://twitter.com/share?url=${urlPage}&text= ${this.state.koalaSaying} /hello-koala`, "SNS_window", "width=600, height=500, menubar=no, toolbar=no, scrollbars=yes");
          }}>Twitter</button>
          <button onClick={() => {this.setState({isModalOpen: false});}}>閉じる</button>
        </div>
      );
    }
    return (
      <div className="App">
        <h1>コアラに挨拶しよう！</h1>
        <div className="btn-wrap">
          <button 
            onClick={
              () => {
                this.handleClick(1)
              }
            }
          >おはよう</button>
          <button 
            onClick={
              () => {
                this.handleClick(2)
              }
            }
          >こんにちは</button>
          <button 
            onClick={
              () => {
                this.handleClick(3)
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
