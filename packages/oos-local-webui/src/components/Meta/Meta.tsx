import { CollectionsBookmark, Commit, Extension, LocalOffer, RssFeed, Error, TextSnippet, FactCheck, Image } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Chip, { ChipProps } from "@mui/material/Chip";
import { TMeta } from '../../interfaces';


export const Meta = ( { type, value,...rest } : TMeta & ChipProps) => {

    
    const media: Record<string,JSX.Element> = {
        'DropText': <Chip size="small" label="Text"  icon={<TextSnippet />}/>, 
        'DropCheckList': <Chip size="small" label="Check List"  icon={<FactCheck />}/>, 
        'DropImage': <Chip size="small" label="Image"  icon={<Image />}/>
    }

    const meta: Record<string,JSX.Element> = {
        label: <Chip size="small" label={value} color="secondary" onDelete={rest.onDelete} icon={<LocalOffer />} />,
        extension: <Chip size="small"  color="warning" label={value} onDelete={rest.onDelete} icon={<Extension />}/>, 
        person: <Chip size="small"  color="info" label={value} onDelete={rest.onDelete} avatar={<Avatar  src="/assets/images/avatars/1.jpg" />} />,
        public: <Chip size="small"  color="info" label={value} onDelete={rest.onDelete} icon={<RssFeed />} />,
        group: <Chip size="small" label={value} color="primary" onDelete={rest.onDelete} icon={<CollectionsBookmark />} />,
        dapp: <Chip size="small" label={value} color="error" onDelete={rest.onDelete} icon={<Commit />} />
    }

    return type === 'media' ? media[value] : meta[type] || <Chip size="small" label="Unrecognized" icon={<Error />}/>;


}
