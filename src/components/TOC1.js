import React, { Component } from 'react';

class TOC1 extends Component{
    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(<li key = {data[i].id}>
          <a href = {"/content/"+data[i].id}
            onClick={function(id, e){  // e는 항상 마지막에 있어야 함
              e.preventDefault();
              this.props.onChangePage(id);  // 1
            }.bind(this, data[i].id)}>
                {data[i].title}
            </a></li>);
        i += 1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }
export default TOC1;