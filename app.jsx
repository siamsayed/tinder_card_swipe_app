import React, { Component } from 'react';
import '../test.css'
import {AiFillHeart} from "react-icons/ai"
import {ImCross} from "react-icons/im"
class Index extends Component {
    state = {
        cards: [
            {
                bigCards: [
                    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
                    "https://www.w3schools.com/howto/img_forest.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
                    "https://www.w3schools.com/w3css/img_lights.jpg"
                ],
                smallCards: [
                    "https://www.w3schools.com/w3css/img_lights.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp"
                ]
            },
            {
                bigCards: [
                    "https://images.ctfassets.net/hrltx12pl8hq/3KWcqxPlvmgkpMS5VdjLAk/3cbdd812faf4b8c343b259656d31a0ee/rendered_15.jpg?fit=fill&w=480&h=270",
                    "https://hotpot.ai/images/site/ai/art_maker/teaser.jpg",
                    "https://hotpot.ai/images/site/ai/art_maker/teaser.jpg",
                    "https://hotpot.ai/images/site/ai/art_maker/teaser.jpg"
                ],
                smallCards: [
                    "https://www.w3schools.com/w3css/img_lights.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp"
                ]
            },
            {
                bigCards: [
                    "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15LKhfonC1L-KdYnS-CQI7xbbq9ipqOVutQ&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLokXlgxkp9ef9ao9gaujnvvJ7p3eAUhpdkw&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15LKhfonC1L-KdYnS-CQI7xbbq9ipqOVutQ&usqp=CAU"
                ],
                smallCards: [
                    "https://www.w3schools.com/w3css/img_lights.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp",
                    "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jp"
                ]
            }
        ],
        index: 0,
        indicator: null,
        animaton:{
            fontSize:"1rem"
        }

    }
    likeFunc = () => {


        setTimeout(() => {
            this.setState({ index: this.state.index < this.state.cards.length - 1 ? this.state.index + 1 : 0, indicator: "Like" ,animaton:{fontSize:"3rem"}})
        }, 500);
        setTimeout(() => {
            this.setState({ indicator: null ,animaton:{fontSize:"1rem"}})
        }, 1000);

    }
    dislikeFunc = () => {
        setTimeout(() => {
            this.setState({ index: this.state.index < this.state.cards.length - 1 ? this.state.index + 1 : 0, indicator: "Dislike" ,animaton:{fontSize:"3rem"}})

        }, 500);
        setTimeout(() => {
            this.setState({ indicator: null ,animaton:{fontSize:"1rem"}})
        }, 1000);
    }
    render() {

        return (
            <div className="main_section">
                <div className="cards_section">

                    <div className="indicatorLike indicator" style={{fontSize:this.state.animaton.fontSize}} >{this.state.indicator == "Like" ? <AiFillHeart/>:null}</div>
                    <div className="indicatorDislike indicator" style={{fontSize:this.state.animaton.fontSize}} >
                    {this.state.indicator=="Dislike"? <ImCross/>:null}
                    </div>


                    <div className="big_cards">
                        <img className="big_card_one big_card" src={this.state.cards[this.state.index].bigCards[1]} alt="" />
                        <img className="big_card_two big_card" src={this.state.cards[this.state.index].bigCards[2]} alt="" />
                        <img className="big_card_three big_card" src={this.state.cards[this.state.index].bigCards[3]} alt="" />
                        <img className="big_card_four big_card" src={this.state.cards[this.state.index].bigCards[1]} alt="" />
                    </div>

                    <div className="small_cards">
                        <img src={this.state.cards[this.state.index].bigCards[1]} className="small_card_one small_card" alt="" />
                        <img src={this.state.cards[this.state.index].bigCards[1]} className="small_card_one small_card" alt="" />
                        <img src={this.state.cards[this.state.index].bigCards[2]} className="small_card_one small_card" alt="" />
                        <img src={this.state.cards[this.state.index].bigCards[3]} className="small_card_one small_card" alt="" />
                    </div>



                </div>
                <div className="btn_section">
                    <div className="like_btn btn " onClick={this.likeFunc}>+</div>
                    <div className="dislike_btn btn" onClick={this.dislikeFunc}>-</div>
                </div>
            </div>

        );
    }
}

export default Index;
