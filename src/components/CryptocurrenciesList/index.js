import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrencyList extends Component {
  state = {
    cryptoList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCryptoDetails()
  }

  getCryptoDetails = async () => {
    const cryptoDetails = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await cryptoDetails.json()
    const updatedData = responseData.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({
      cryptoList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div className="currencies-list-container">
        <h1 className="main-heading"> Cryptocurrency Tracker </h1>
        <div className="header-image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            alt="cryptocurrency"
          />
        </div>
        <div className="currencies-table-list-container">
          <div className="table-attributes">
            <div className="first-attribute-container">
              <h1 className="coin-type-name"> Coin Type </h1>
            </div>
            <div className="last-attributes-container">
              <div className="second-attribute-container">
                <h1 className="usd-name"> USD </h1>
              </div>
              <div className="third-attribute-container">
                <h1 className="euro-name"> EURO </h1>
              </div>
            </div>
          </div>

          <ul className="crypto-rows-container">
            {isLoading ? (
              <div data-testid="loader" className="loader-style">
                <Loader type="Rings" color="#ffffff" height={80} width={80} />
              </div>
            ) : (
              <div>
                {cryptoList.map(eachItem => (
                  <CryptocurrencyItem
                    eachCryptoDetails={eachItem}
                    key={eachItem.id}
                  />
                ))}
              </div>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default CryptocurrencyList
