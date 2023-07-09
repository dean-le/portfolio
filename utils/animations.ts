import { keyframes } from "@chakra-ui/react";

export const liquidShapeKeyframes = keyframes`
	0% {
		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		background-size: 100% 100%;
	}

	50% {
		border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
		background-size: 300% 150%;
	}

	100% {
		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
		background-size: 100% 100%;
	}
`;
