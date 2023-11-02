import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What are the most important factors to consider when choosing a place to live?",
        value: "What are the most important factors to consider when choosing a place to live?"
    },
    { 
        text: "What factors do households without children consider important when choosing a place to live?",
        value: "What factors do households without children consider important when choosing a place to live?" 
    },
    {
        text: "What factors affect satisfaction in living environment for people in their 30s?",
        value: "What factors affect satisfaction in living environment for people in their 30s?" 
    }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
