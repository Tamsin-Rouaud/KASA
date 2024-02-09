import './ListingInfo.sass';

const ListingInfo = ({ card }) => {
	return (
		<div className='listingInfo'>
			<div key={card.id} className='listingInfo__container'>
				<h3 className='listingInfo__title'>{card.title}</h3>
				<p className='listingInfo__location'>{card.location}</p>
				<ul className='listingInfo__tagsContainer'>
					{card.tags.map((tag, index) => (
						<li key={index} className='listingInfo__tags'>
							<button className='listingInfo__tags--button'>{tag}</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default ListingInfo;
