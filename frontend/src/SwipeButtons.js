import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from "@material-ui/icons/Replay"
import CloseIcon from "@material-ui/icons/Close"
import StarRateIcon from "@material-ui/icons/StarRate"
import FavoriteIcon from "@material-ui/icons/Favorite"
import FlashOnIcon from "@material-ui/icons/FlashOn"
import IconButtons from "@material-ui/core/IconButton"

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButtons className='swipeButtons__repeat'>
                <ReplayIcon fontSize='large' />
            </IconButtons>
            <IconButtons className='swipeButtons__left'>
                <CloseIcon fontSize='large' />
            </IconButtons>
            <IconButtons className='swipeButtons__star'>
                <StarRateIcon fontSize='large' />    
            </IconButtons>
            <IconButtons className='swipeButtons__right'>
              <FavoriteIcon fontSize='large' />  
            </IconButtons>
            <IconButtons className='swipeButtons__lighting'>
               <FlashOnIcon fontSize='large' />
            </IconButtons>
            
        </div>
    )
}

export default SwipeButtons
