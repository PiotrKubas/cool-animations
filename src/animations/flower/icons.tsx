import { forwardRef } from 'react';

export const Core = forwardRef((props, ref: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" height={301} width={6} ref={ref}>
        <line
            className="plant"
            id="stem"
            y1="301"
            fill="none"
            stroke="#678b2d"
            stroke-linecap="round"
            stroke-width="13"
        />
    </svg>
));

export const LeafA = forwardRef((props, ref: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={67} height={79} ref={ref}>
        <g>
            <path
                id="dark-2"
                data-name="dark"
                d="M55.348,4.313s8.63,30.64-18.952,44.76S15.434,71.289,15.434,71.289-17.306,26.8,12.583,9.318,55.348,4.313,55.348,4.313Z"
                transform="translate(55.93 79.27) rotate(-171)"
                fill="#879b23"
            />
            <path
                id="bright-2"
                data-name="bright"
                d="M43.573,0S52.2,30.64,24.621,44.76,3.66,66.976,3.66,66.976s-14.791-21.538,15.1-39.017S43.573,0,43.573,0Z"
                transform="translate(44.975 73.168) rotate(-171)"
                fill="#c1c145"
            />
        </g>
    </svg>
));

export const LeafB = forwardRef((props, ref: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={67} height={79} ref={ref}>
        <g>
            <path
                id="dark-3"
                data-name="dark"
                d="M50.125,60.656S57.941,32.908,32.962,20.12,13.978,0,13.978,0-15.673,40.294,11.4,56.123,50.125,60.656,50.125,60.656Z"
                transform="translate(0 8.022) rotate(-9)"
                fill="#879b23"
            />
            <path
                id="bright-3"
                data-name="bright"
                d="M39.462,60.656S47.278,32.908,22.3,20.12,3.314,0,3.314,0-10.081,19.505,16.987,35.335,39.462,60.656,39.462,60.656Z"
                transform="translate(10.532 6.354) rotate(-9)"
                fill="#c1c145"
            />
        </g>
    </svg>
));

export const Pot = forwardRef((props, ref: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" ref={ref} width={169}>
        <g id="Pot">
            <path
                id="base"
                d="M-20,0H135.544l-9.017,159.151a6.763,6.763,0,0,1-6.763,6.763H-4.22a6.763,6.763,0,0,1-6.763-6.763Z"
                transform="translate(26.312 14.878)"
                fill="#c3926f"
            />
            <rect id="top" width="168.168" height="32.011" fill="#c3926f" />
            <path
                id="shadow"
                d="M4.42,0H158.641V11.076H5.79Z"
                transform="translate(2.081 32.011)"
                fill="#b5805a"
            />
            <path
                id="shadow-side"
                d="M0,180.792V0H82.243V32.011H74.822L74.655,34.9v8.191h-.473l-7.56,130.942a6.828,6.828,0,0,1-6.892,6.763Z"
                transform="translate(86.376)"
                fill="#a06030"
                opacity="0.41"
            />
        </g>
    </svg>
));

export const FlowerTop = forwardRef((props, ref: any) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={169} ref={ref}>
        <g className="plant" id="flower">
            <path
                className="petal"
                id="_1"
                data-name="1"
                d="M54.617,52.712,6.515,84.744s-17.932-57.926,5.7-72.054S63.065.045,63.065.045Z"
                fill="#c44444"
            />
            <path
                className="petal"
                id="_2"
                data-name="2"
                d="M981.056,230.522l-48.1-32.033s-17.932,57.926,5.7,72.054S989.5,283.189,989.5,283.189Z"
                fill="#c44444"
            />
            <path
                className="petal"
                id="_3"
                data-name="3"
                d="M54.617,32.033C40.479,10.858,6.515,0,6.515,0s-17.932,57.926,5.7,72.054S63.066,84.7,63.066,84.7,68.755,53.208,54.617,32.033Z"
                fill="#e24d4d"
            />
            <path
                className="petal"
                id="_4"
                data-name="4"
                d="M942.279,239.038c14.138-23.883,40.711-40.548,40.711-40.548s17.932,65.335-5.7,81.27-50.847,14.263-50.847,14.263S928.141,262.921,942.279,239.038Z"
                fill="#e06d6d"
            />
            <path
                className="petal"
                id="_5"
                data-name="5"
                d="M936.541,233.066c14.138-21.175,46.623-34.576,46.623-34.576s17.932,57.926-5.7,72.054-50.847,12.646-50.847,12.646S922.4,254.241,936.541,233.066Z"
                fill="#e24d4d"
            />
        </g>
    </svg>
));
