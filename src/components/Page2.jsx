import React, { Component } from 'react';


class Page2 extends Component{
  render(){
    return(
        <div>
          <div className="row cards">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-3">
                  <div className="container">
                    <img src="data:image/png;base64,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" alt=""/>
                  </div>
                </div>

                <div className="col-sm-9">
                  <div className="title">
                    <h4>Obesity in America</h4>
                    <span>Why are american so fat?</span><br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum cumque facilis voluptatibus, rerum nostrum voluptatum sunt reiciendis, vero ut hic consequuntur sit mollitia? Architecto repellat ducimus, veritatis consectetur, vero maiores.</p>
                  </div>

                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZFMYFSD1vvztu707SAKdJVMfxEwhZ8_9lXEYHBcTGEUkF284uNQ" alt=""/>


                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ2fSawVbknytFEDnNSAYmKOUPO91eYaHhrwNm-rtdv4pP4etn_w" alt=""/>

                </div>
              </div>
            </div>
          </div>
          <div className="row cards">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-sm-3">
                  <div className="container">
                    <img src="data:image/png;base64,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" alt=""/>
                  </div>
                </div>

                <div className="col-sm-9">
                  <div className="title">
                    <h4>Obesity in America</h4>
                    <span>Why are american so fat?</span><br/><br/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum cumque facilis voluptatibus, rerum nostrum voluptatum sunt reiciendis, vero ut hic consequuntur sit mollitia? Architecto repellat ducimus, veritatis consectetur, vero maiores.</p>
                  </div>

                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRZFMYFSD1vvztu707SAKdJVMfxEwhZ8_9lXEYHBcTGEUkF284uNQ" alt=""/>


                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQQ2fSawVbknytFEDnNSAYmKOUPO91eYaHhrwNm-rtdv4pP4etn_w" alt=""/>

                </div>
              </div>
            </div>

          </div>

        </div>
    )
  }
};

export default Page2;
