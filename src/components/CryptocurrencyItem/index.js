import './index.css'

const CryptocurrencyItem = props => {
  const {eachCryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachCryptoDetails

  return (
    <li className="each-row-item">
      <div className="crypto-logo-name-container">
        <img src={currencyLogo} alt={currencyName} className="crypto-logo" />
        <p className="crypto-name"> {currencyName} </p>
      </div>
      <div className="usd-euro-container">
        <div>
          <p className="usd-value"> {usdValue} </p>
        </div>
        <div>
          <p className="euro-value"> {euroValue} </p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
