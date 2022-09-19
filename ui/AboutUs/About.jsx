import React from 'react';
import { More } from '../More';
import { Table } from "../Table";
import { UseData } from '../../hooks/useData';

const About = ({ showMore }) => {
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

                    </p>
                    <More />
                </div>
                <div>
                    <UseData 
                    col={"aboutUs"}
                    render={state => {
                        console.log(state);
                        return state.map((data, index) => {
                            return (
                                <Table 
                                    key={index}
                                    data={data}
                                    index={index}
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