import { CollectionsBookmark, Commit, Extension, LocalOffer, RssFeed, Error, TextSnippet, FactCheck, Image } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { TMeta } from '../../models/interfaces';


export const Meta = ( { type, value } : TMeta) => {
    const MetaMedia = (media: string) => {
        switch(media){
            case 'text': return <Chip size="small" label="Text"  icon={<TextSnippet />}/>; 
            case 'checklist': return <Chip size="small" label="Check List"  icon={<FactCheck />}/>; 
            case 'image': return <Chip size="small" label="Image"  icon={<Image />}/>; 
            default: return <Chip size="small" label="Unrecognized Type"  icon={<Error />}/>;
        }
    }
    switch (type) {
        case 'media' : return MetaMedia(value);
        case 'label' : return <Chip size="small" label={value} color="secondary" icon={<LocalOffer />} />
        case 'extension': return <Chip size="small"  color="warning" label={value} icon={<Extension />}/>; 
        case 'person': return <Chip size="small"  color="info" label={value} avatar={<Avatar  src="/assets/images/avatars/1.jpg" />} />
        case 'public': return <Chip size="small"  color="info" label={value} icon={<RssFeed />} />
        case 'group' : return <Chip size="small" label={value} color="primary" icon={<CollectionsBookmark />} />
        case 'dapp' : return <Chip size="small" label={value} color="error" icon={<Commit />} />
        default: return <Chip size="small" label="Unrecognized Meta"  icon={<Error />}/>;
      }
}

export default Meta;