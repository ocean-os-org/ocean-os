import { CollectionsBookmark, Commit, Extension, LocalOffer, RssFeed, Error, TextSnippet, FactCheck, Image } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Chip, { ChipProps } from "@mui/material/Chip";
import { TMeta, UMeta } from '../../interfaces';


export const Meta = ( { type, name,...rest } : TMeta<UMeta> & ChipProps) => {

    
    const media: Record<string,JSX.Element> = {
        'DropText': <Chip size="small" label="Text"  icon={<TextSnippet />}/>, 
        'DropCheckList': <Chip size="small" label="Check List"  icon={<FactCheck />}/>, 
        'DropImage': <Chip size="small" label="Image"  icon={<Image />}/>
    }

    const meta: Record<string,JSX.Element> = {
        label: <Chip size="small" label={name} color="secondary" onClick={rest.onClick} icon={<LocalOffer />} />,
        extension: <Chip size="small"  color="warning" label={name} onClick={rest.onClick} icon={<Extension />}/>, 
        person: <Chip size="small"  color="info" label={name} onClick={rest.onClick} avatar={<Avatar  src="/assets/images/avatars/1.jpg" />} />,
        public: <Chip size="small"  color="info" label={name} onClick={rest.onClick} icon={<RssFeed />} />,
        group: <Chip size="small" label={name} color="primary" onClick={rest.onClick} icon={<CollectionsBookmark />} />,
        dapp: <Chip size="small" label={name} color="error" onClick={rest.onClick} icon={<Commit />} />
    }

    return type === 'media' ? media[name] : meta[type] || <Chip size="small" label="Unrecognized" icon={<Error />}/>;


}
