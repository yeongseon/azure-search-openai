import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "What factors do men in their 30s consider important when choosing a place to live?",
        value: "What factors do men in their 30s consider important when choosing a place to live?"
    },
    { 
        text: "What factors do households without children consider important when choosing a place to live?",
        value: "What factors do households without children consider important when choosing a place to live?" 
    },
    {
        text: "What factors do single households consider important when choosing a place to live?",
        value: "What factors do single households consider important when choosing a place to live?" 
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
