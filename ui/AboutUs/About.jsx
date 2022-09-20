import React from 'react';
import { More } from '../More';
import { Table } from "../Table";
import { UseData } from '../../hooks/useData';

const About = ({ showMore, text }) => {
    return (
        <div>
            <div>
                <h2>
                    О нас
                </h2>
            </div>
            <div>
                <div>
                    <p>
                        { text }
                    </p>
                    <More />
                </div>
                <div>
                    <UseData 
                    col={"aboutUs"}
                    render={state => {
                        console.log(state);
                        return state.map((data) => {
                            return (
                                <Table 
                                    key={data.id}
                                    data={data}
                                />
                            );
                        })
                    }}
                    />
                </div>
            </div>
        </div>
    )
}

export { About };