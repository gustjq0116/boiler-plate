import React, { useState } from 'react';
import Menus from './Menus';
import { Drawer, Button, Menu } from 'antd';
import './NavBar.css';


function NavBar(props) {
  const [visible, setVisible] = useState(false)
  //console.log(props)

  const showDrawer = () => {
    setVisible(true)
  };

  const onClose = () => {
    setVisible(false)
  };

  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="menu__logo">
        <a href="/">Logo</a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <Menus mode="horizontal" {...props}/>
          
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          menu
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
           <Menus mode="inline" {...props}/>
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar



// import React, { useState } from 'react';
// import { Drawer, Button, Menu, Icon } from 'antd';
// import Menus from './Menus';
// import './NavBar.css';

// function NavBar() {
//   const [visible, setVisible] = useState(false)

//   const showDrawer = () => {
//     setVisible(true)
//   };

//   const onClose = () => {
//     setVisible(false)
//   };

//   return (
//     <nav className="menu" style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
//       <div className="menu__logo">
//         <a href="/">Logo</a>
//       </div>
      
//       <div className="menu__container">
//         <div className="menu_left">
//             <Menus mode="horizontal"></Menus>
//         </div>
//         <Button
//           className="menu__mobile-button"
//           type="primary"
//           onClick={showDrawer}
//         >
//           메뉴
//         </Button>
    
//         {/* <Icon type="message" style={{ fontSize: '16px', color: '#08c' }} theme="outlined" /> */}
//         <Drawer
//           title="Basic Drawer"
//           placement="right"
//           className="menu_drawer"
//           closable={false}
//           onClose={onClose}
//           visible={visible}
//         >
//             <Menus mode="inline"></Menus>
//         </Drawer>
//       </div>
//     </nav>
//   )
// }

// export default NavBar