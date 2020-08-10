import React from 'react'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButton from "@material-ui/core/IconButton"
import './Buttons.css'

const Buttons = () => {
    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__reload">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__cancel">
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__heart">
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton className="swipeButtons__blizz">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default Buttons
