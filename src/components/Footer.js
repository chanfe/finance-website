import React from 'react';
import { Container, Menu, NavLink} from 'semantic-ui-react'

const Footer = (props) =>{
  return(
    <Container textAlign='center'>
        <p>View on <a href="https://github.com/chanfe/">GitHub</a></p>
        <Menu floated="right">
        <NavLink to="/">
          <Menu.Item name='home' active={activeItem === 'score'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/budgeting-tips">
          <Menu.Item name='budgeting' active={activeItem === 'score2'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/debt-free-living">
            <Menu.Item name='debt-free_living' active={activeItem === 'user'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/make-money">
            <Menu.Item name='make_money' active={activeItem === 'game'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/save-money">
            <Menu.Item name='save_money' active={activeItem === 'game2'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/debt-snowball-calculator">
            <Menu.Item name='debt_snowball_calculator' active={activeItem === 'secret'} onClick={this.handleItemClick} />
        </NavLink>
        <NavLink to="/resources">
            <Menu.Item name='resources' active={activeItem === 'logout'} onClick={this.handleLogout} />
        </NavLink>
      </Menu>
    </Container>
  )
}

export default Footer
