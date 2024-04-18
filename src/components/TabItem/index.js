import './index.css'

const TabItem = props => {
  const { tabDetails, onTabClick, isSelected } = props
  const { displayText, tabId } = tabDetails

  return (
    <li className={`tab-item-container ${isSelected ? 'active' : ''}`}>
      <button type="button" onClick={() => onTabClick(tabId)} className="tab-btn">
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
