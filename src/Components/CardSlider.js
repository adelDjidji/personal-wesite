import React from 'react';
import {
    LinkOutlined
} from '@ant-design/icons';
import { Tag,Tooltip } from 'antd';
import "../Styles/card.scss"

export default function Card({ projectName,skills,link,date,cover }) {
    return <div className="card-slider w-1/3 bg-white boxshadow-3xl outline-none rounded-xl">
        <div className="card-content h-80 bg-cover bg-center" style={{ backgroundImage: `url(${cover})` }}>

        </div>
        <div className="card-footer flex p-4 justify-between">
            <div className="auth flex ">

                <div className="block">
                    <b className="text-white font-bold">{projectName}</b><br />
                    {skills.map(skill => <Tag icon={null} color="#55acee">
                        {skill}
                    </Tag>)}
                </div>
            </div>
            <div className="source w-12 h-12">
                <Tooltip title="Visit project">
                    {
                        <a className="text-2xl p-2" href={link} target="_blank" rel="noreferrer" title={`visit project link`}>
                            <LinkOutlined /></a>
                    }
                </Tooltip>

            </div>
        </div>
    </div>
};
