import Card from './Card';
import card from '../data.js';
function FeatureSection() {

    return (
        <div className='featured-product'>
            <h6 >Featured Products</h6>
            <div className='products'>
                {card.map((item,id) => {
                    return <Card key={id} product={item}/>
                })}
                
            </div>
            <button className='view' type='button'>View More</button>
        </div>
    );
}

export default FeatureSection;
