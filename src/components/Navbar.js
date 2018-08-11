import './../css/navbar.css';
import React, { Component } from "react";
import {
  Container,
  Icon,
  Image,
  Menu,
  Sidebar,
  Responsive,
  Dropdown,
  Segment,
} from "semantic-ui-react/dist/commonjs";

import { HashLink as Link } from 'react-router-hash-link';

const logo = require('../assets/logoCapa.svg');

const NavBarMobile = ({
  children,
  onPusherClick,
  onToggle,
  visible
}) => (
  <div>
    {!visible && <Menu fixed="top" inverted>
      <Menu.Item onClick={onToggle}>
        <Icon name="sidebar" />
      </Menu.Item>
      <Menu.Item as={Link} to="/#inscricoes">
        <Image size="tiny" src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1524256984/download_olctam.svg" />
      </Menu.Item>
    </Menu> }
    <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible={visible}
      >
        <Menu.Item as={Link} content="Início" to="/#inicio"/>
        <Menu.Item as={Link} content="Ementa" to="/ementa#word"/>
        <Menu.Item as={Link} content="Apostila" to="/apostila#word"/>
        {/* <Menu.Item as={Link} content="Contato" to="/#contato"/> */}
        {/* <Menu.Item as={Link} content="Regulamento" to="/regulamento#regulamento"/>
        <Menu.Item as={Link} content="Pratique - Teórica" to="/pratique-teorica#prova-teorica"/>
        <Menu.Item as={Link} content="Pratique - Pratica" to="/pratique-pratica#prova-pratica"/> */}
        {/* <Menu.Item as={Link} content="Divulgue" to="/divulgue#cartaz"/> */}
        {/* <Menu.Item as={Link} content="FAQ" to="/faq#perguntas-frequentes"/> */}
      </Sidebar>
    <Sidebar.Pushable as={Segment} style={{marginTop: "-1px"}}>
      <Sidebar.Pusher
        dimmed={visible}
        onClick={onPusherClick}
        style={{ minHeight: "100vh" }}
      >
        {visible && <Menu fixed="top" inverted>
          <Menu.Item onClick={onToggle}>
            <Icon name="sidebar" />
          </Menu.Item>
          {/* <Menu.Item as={Link} to="/#inscricoes">
            <Image size="tiny" src="https://res.cloudinary.com/dkbuneg9h/image/upload/v1524256984/download_olctam.svg" />
          </Menu.Item> */}
        </Menu> }
        <Segment basic>
          {children}
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
);

const NavBarDesktop = () => (
  <Menu fixed="top" inverted>
    <Menu.Item as={Link} to="/#inicio" >
    <Image size="small" src={logo} />
    </Menu.Item>
    <Menu.Item as={Link} content='Inscrição' name='inscricao' to='/#inscricao'/> 
    <Dropdown text='Ementa' pointing="top" className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/ementa#word">Word</Dropdown.Item>
        <Dropdown.Item as={Link} to="/ementa#ppt">PowerPoint</Dropdown.Item>
        <Dropdown.Item as={Link} to="/ementa#excel">Excel</Dropdown.Item>
        <Dropdown.Item as={Link} to="/ementa#gsuite">G Suite</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text='Apostila' pointing="top" className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/apostila#word">Word</Dropdown.Item>
        <Dropdown.Item as={Link} to="/apostila#ppt">PowerPoint</Dropdown.Item>
        <Dropdown.Item as={Link} to="/apostila#excel">Excel</Dropdown.Item>
        <Dropdown.Item as={Link} to="/apostila#gsuite">G Suite</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    {/* <Menu.Item as={Link} content='Regulamento' name='regulamento' to='/regulamento#regulamento'/>
    <Dropdown text='Pratique' pointing="top" className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/pratique-teorica#prova-teorica">Prova Teórica</Dropdown.Item>
        <Dropdown.Item as={Link} to="/pratique-pratica#prova-pratica">Prova Prática</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Menu.Item as={Link} content='Divulgue' name='divulgue' to='/divulgue#cartaz'/> */}
    {/* <Menu.Item as={Link} content='FAQ' name='faq' to='/faq#perguntas-frequentes'/> */}
  </Menu>
);

const NavBarChildren = ({ clas, children }) => (
  <Container fluid className={"inv-lat-marg "+clas}>{children}</Container>
);

export default class Navbar extends Component {

  state = {
    visible: false
  };

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return (
      <div>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            onPusherClick={this.handlePusher}
            onToggle={this.handleToggle}
            visible={visible}
          >
            <NavBarChildren clas='mobile'>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop />
          <NavBarChildren clas='desktop'>{children}</NavBarChildren>
        </Responsive>
      </div>
    );
  }
}
