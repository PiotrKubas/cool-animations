import { useState } from 'react';
import { Flower } from './animations/flower/flower';
import { NeonButtons } from './animations/neon-buttons/neon-buttons';

const animations = [
    {
        id: 'neon-buttons',
        label: 'Neon Buttons',
    },
    {
        id: 'flower',
        label: 'Flower',
    },
];

const Root = () => {
    const [active, setActive] = useState('flower');

    const renderAnimation = () => {
        switch (active) {
            case 'neon-buttons':
                return <NeonButtons />;
            case 'flower':
                return <Flower />;
            default:
                return null;
        }
    };

    return (
        <>
            <aside className="sidebar">
                <ul className="sidebar-list">
                    {animations.map(({ id, label }) => (
                        <li
                            key={id}
                            onClick={() => setActive(id)}
                            className={`sidebar-item ${
                                id === active ? 'active' : ''
                            }`}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            </aside>
            <main className="content">{renderAnimation()}</main>
        </>
    );
};

export default Root;
