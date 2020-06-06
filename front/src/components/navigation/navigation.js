import React, { Component } from 'react'
import { Button, Menu, Icon, Modal, Input } from 'semantic-ui-react'

import { Link } from 'react-router-dom'

import './navigation.css'

export default class Navbar extends Component {
  state = { activeItem: 'خانه' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='large' className="navbar">

          <Menu.Item>
          <Modal trigger={
              <Button animated primary>
                <Button.Content visible>
                  ورود
                </Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow left' />
                </Button.Content>
              </Button>
          }>
            <Modal.Header className="modal-header">ورود به سامانه</Modal.Header>
            <Modal.Content>
              <Modal.Description className="modal-description">
                <p>
                  <Input icon='user' iconPosition='right' placeholder='نام کاربری' />
                </p>
                <p>
                  <Input icon='key' iconPosition='right' placeholder='رمز عبور' type="password" />
                </p>
                <p>
                  <Button animated primary>
                    <Button.Content visible>
                      ورود
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name='arrow left' />
                    </Button.Content>
                  </Button>
                </p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
            
          </Menu.Item>

          <Menu.Item>
            <Button animated='vertical' color="green">
              <Button.Content visible>
                ثبت‌نام
              </Button.Content>
              <Button.Content hidden>
                <Icon name='plus'/>
              </Button.Content>
            </Button>
          </Menu.Item>

        <Menu.Menu position='right'>
            <Link to='/app'>
              <Menu.Item
                name='اپلیکیشن'
                active={activeItem === 'اپلیکیشن'}
                onClick={this.handleItemClick}
              />
              </Link>

            <Menu.Item
              name='خانه'
              active={activeItem === 'خانه'}
              onClick={this.handleItemClick}
            />
           
          </Menu.Menu>
      </Menu>
    )
  }
}