import { useEffect } from 'react';
import Banner from './Banner';
import "./home.css";
import Slide from './Slide';
import { useSelector, useDispatch } from 'react-redux';
import { saveData } from '../Redux/action';

const MainComponent = () => {
    let dispatch = useDispatch();
    let data = useSelector((state) => state.products);

    useEffect(()=>{
        const getdata =async ()=>{
            let jsondata = await fetch("/products/alldata");
            let productList = await jsondata.json();
            dispatch(saveData(productList.data))
            // console.log(productList.data);
        }
        if(data.length === 0){
            getdata();
        }
    }, [])

    console.log(data);

    return (
        <div className='home_section'>
            <div className="banner_part">
                <Banner />
            </div>
            <div className="slide_part">
                <div className="left_slide">
                    <Slide title="Deal of the day" />
                </div>
                <div className="right_slide">
                    <h4>Festive latest launches</h4>
                    <img
                        src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg"
                        alt="Ad"
                    />
                    <a href="#">see more</a>
                </div>
            </div>
            <Slide title="Today's Deal" />
            <div className="center_img">
                <img
                    src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
                    alt="Ad"
                />
            </div>
            <Slide title="Best Seller" />
            <Slide title="Upto 80% off" />
        </div>
    )
}

export default MainComponent
