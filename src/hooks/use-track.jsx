import { useSelector } from "react-redux";

export function useTrack() {
    const {id, name, author, duration_in_second, album, track_file} = useSelector(state => state.currentTrack.track)
return {
            id,
            name,
            author,
            duration_in_second,
            album,
            track_file
    }

};