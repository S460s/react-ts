import styled from 'styled-components';
import { TaskInterface } from '../common/interfaces';

interface StyledBarProps {
	width: number;
}

const StyledBar = styled.div<StyledBarProps>`
	width: ${({ width }) => width}%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.primary};
	display: flex;
	justify-content: flex-end;
	align-items: center;
	position: absolute;
	transition: width 1s ease;
`;

const BarWrap = styled.div`
	width: 80%;
	max-width: 900px;
	height: 30px;
	display: block;
	margin: auto;
	margin-top: 30px;
	margin-bottom: 30px;
	border: 2px solid ${({ theme }) => theme.colors.dark};
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const CompleteNum = styled.span`
	color: ${({ theme }) => theme.colors.light};
	position: absolute;
	z-index: 2;
`;

interface ProgressBarProps {
	tasks: TaskInterface[];
}

const ProgressBar = ({ tasks }: ProgressBarProps) => {
	let completed = 0;
	let total = tasks.length;
	tasks.forEach((task) => {
		if (task.isDone) {
			completed += 1;
		}
	});
	let percent = total ? (completed / total) * 100 : 100;

	return (
		<BarWrap>
			<CompleteNum>{Math.floor(percent)}%</CompleteNum>
			<StyledBar width={percent}></StyledBar>
		</BarWrap>
	);
};

export default ProgressBar;
