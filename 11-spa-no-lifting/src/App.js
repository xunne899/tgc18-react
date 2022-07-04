import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import Listing from './pages/Listing'
import AddRecipe from './pages/AddRecipe'

export default class App extends React.Component {
  
  state = {
    active:'listing'
  }
  
  renderContent() {
    if (this.state.active === 'listing') {
      // create and render an instance
      // of the Listing component
      return <Listing/>
    } else if (this.state.active === 'add-new') {
      return <AddRecipe changePage={this.switchPage}/>
    }
  }
  
  switchPage = (page) => {
    this.setState({
      active: page
    })
  }


  getLinkForTab(pageName) {
    if (pageName === this.state.active) {
      return "nav-link active"
    } else {
      return "nav-link"
    }
  }

  render() {
    return <React.Fragment>
    <div class="container">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button className={this.getLinkForTab('listing')}onClick={()=>{
            this.switchPage('listing')
          }}>Recipes</button>
        </li>
        <li className="nav-item">
          <button className={this.getLinkForTab('add-new')} onClick={()=>{
            this.switchPage('add-new')
          }}>Add New</button>
        </li>
      </ul>
       {this.renderContent()}
    </div>
  </React.Fragment>
  }
    
}