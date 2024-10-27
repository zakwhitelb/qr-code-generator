import { Loading } from '../../loading/Loading';

function Button({ text, loading }) {
    return (
        <div className="flex items-center justify-center w-full h-[60px] bg-[var(--blue2white)] rounded-[10px] gap-[20px] cursor-pointer">
            {loading && 
                <div>
                    <Loading color={"var(--white2black)"} width={"24px"} height={"24px"} />
                </div>
            }
            <p className="font-[noto-sans-semi-bold] text-center" style={{ fontSize: 'var(--24)', color: 'var(--white2black)' }}>
                {text}
            </p>
        </div>
    );
}

export { Button };
