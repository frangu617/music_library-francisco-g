import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem(props) {
    let [view, setView] = useState(false)

    const simpleStyle = {

        'width': '20vw',
        'height': 'fit-content',
        'border': '1px solid black',
        'margin': '2px',
        // backgroundImage: `url(${props.item.artworkUrl100})`,
        // backgroundRepeat: 'no-repeat',
        // backgroundSize: 'cover',        
        color: 'yellow'
    }

    const detailStyle = {
        'width': '80vw',
        'height': 'fit-content',
        'border': '1px solid black',
        'margin': '2px',
        'backgroundImage': `url(${props.item.artworkUrl100})`,
        'backgroundRepeat': 'no-repeat',
        'backgroundSize': 'cover',
        'color': 'yellow'
    }

    const simpleView = () => {
        return (
            <div style={simpleStyle}>
                <h3><Link to={`/song/${props.item.trackId}`}>{props.item.trackName}</Link></h3>
                <h4><Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link></h4>
                <h4><Link to={`/album/${props.item.collectionId}`}>{props.item.collectionName}</Link></h4>
                <img src={props.item.artworkUrl100} alt={props.item.trackName} />
                {/* knowledge from previous classes: adding an audio tag */}
                <audio src={props.item.previewUrl} controls preload="auto" style={{ 'width': '100%' }}></audio>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div style={detailStyle}>
                <h2><Link to={`/song/${props.item.trackId}`}>{props.item.trackName}</Link></h2>
                <h3><Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link></h3>
                <h3><Link to={`/album/${props.item.collectionId}`}>{props.item.collectionName}</Link></h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
                <img src={props.item.artworkUrl100} alt={props.item.trackName} />
            </div>
        )
    }

    return (
        <div onClick={() => setView(!view)} style={{ 'display': 'inline-block' }}>
            {/* This simple ternary shows the simple view when 'view' is false! */}
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem