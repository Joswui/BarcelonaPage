import React from 'react'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import TikTok from '../images/tiktok.png'
import X from '../images/x.png'
import Youtube from '../images/youtube.png'
import Spotify from '../images/spotify.png'

export const Footer = () => {
    return (
        <footer>
            <div>
                <p>© Copyright FC Barcelona</p>
            </div>
            <div className='iconos'>
                <a href='https://www.facebook.com/fcbarcelona/' ><img src={ Facebook } alt='Red social Facebook'/></a>
                <a href='https://www.instagram.com/fcbarcelona/' ><img src={ Instagram } alt='Red social Instagram'/></a>
                <a href='https://www.tiktok.com/@fcbarcelona' ><img src={ TikTok } alt='Red social TikTok' /></a>
                <a href='https://twitter.com/fcbarcelona_es' ><img src={ X } alt='Red social X' /></a>
                <a href='https://www.youtube.com/user/fcbarcelona' ><img src={ Youtube } alt='Red social Youtube' /></a>
                <a href='https://open.spotify.com/user/31gorrj76f2m3wczoifm6f6tbn3q?si=a20bf0c076684729&nd=1' ><img src={ Spotify } alt='Red social Spotify' /></a>
            </div>
        </footer>
    )
}
