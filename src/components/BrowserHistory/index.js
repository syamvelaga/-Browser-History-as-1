import './index.css'

function BrowserHistory(props) {
  const {item, onDeleteFunction} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item
  const onDelete = () => {
    // console.log(id)
    onDeleteFunction(id)
  }

  return (
    <li className="list-container">
      <div className="social-container">
        <p>{timeAccessed}</p>
        <div className="image-container">
          <img className="image-social" src={logoUrl} alt="domain logoa" />
          <div className="title">
            <p>{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div>
        <button onClick={onDelete} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
