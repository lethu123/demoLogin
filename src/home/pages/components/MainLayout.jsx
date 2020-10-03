import React from 'react';
const MainLayout = (props) => {
    return (
        <div id="wrapper">
            <div className="main_content">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout
