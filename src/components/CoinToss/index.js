import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    value: 0,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onTap = () => {
    let {total, heads, tails} = this.state
    const v = Math.floor(Math.random() * 2)
    if (v === 0) {
      heads += 1
    } else {
      tails += 1
    }

    total += 1

    this.setState({value: v, total, heads, tails})
  }

  render() {
    const {value, total, heads, tails} = this.state
    return (
      <div className="bg">
        <div className="bg2">
          <h1 className="h1">Coin Toss Game</h1>
          <p className="p">Heads (or) Tails</p>

          {value ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="img"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="img"
            />
          )}

          <button className="btn" type="button" onClick={this.onTap}>
            Toss Coin
          </button>

          <div className="bg3">
            <p className="p2">Total:{total}</p>
            <p className="p2">Heads:{heads}</p>
            <p className="p2">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
