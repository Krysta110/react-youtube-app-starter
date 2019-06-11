import React, {Component} from 'react'

export default class MainVideo extends Component{
    render(){
        const {video} = this.props
        // const video = this.props.video
        const embedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

        return(<div>

            <iframe src={embedUrl} />
            <h4>
                {video.snippet.title}
            </h4>
            <p>
                {video.snippet.description}
            </p>
        </div>)
    }
}