import React from 'react';

interface TiktokIconProps {
    width?: number;
    height?: number;
    fill?: string;
}

const TiktokIcon: React.FC<TiktokIconProps> = ({ width = 24, height = 24, fill = "currentColor" }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Tiktok icon"
        key="tiktok-icon"
    >
        <path d="M15.4984 4.13418C14.6866 3.19038 14.2613 1.97099 14.2951 0.729532L11.2616 0.65625C11.2616 0.65625 11.2616 0.785675 11.2616 0.960212V13.1248C11.304 16.9733 5.22356 16.8799 5.70462 12.626C5.99874 10.9346 7.81621 9.8937 9.43116 10.4821V7.38695C5.91521 6.77469 2.58325 9.57319 2.61832 13.1384C2.92563 20.8704 14.0156 20.8714 14.3233 13.1384C14.2459 12.8616 14.2892 7.70904 14.2782 7.27447C15.6576 8.13277 17.2625 8.56183 18.8879 8.50687V5.31024C17.3852 5.31024 16.2385 4.91073 15.4984 4.13418Z"
            fill={fill}
        />
    </svg>
);

export default TiktokIcon;