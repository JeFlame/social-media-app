export default function Avatar({ size }) {
    let width = 'w-12';
    if (size === 'lg') {
        width = 'w-24 md:w-36';
    }
    return (
        <div className={`${width} rounded-full overflow-hidden`} >
            <img src="https://scontent.fsgn15-1.fna.fbcdn.net/v/t1.6435-9/151184088_3824016630985908_1609593348639139959_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=vs4wflVA1HUAX8nuGPJ&_nc_ht=scontent.fsgn15-1.fna&oh=00_AfCGnVekaZVHjc4q7qtp289qTFFVC8_bRQXSMgZZX9uRQA&oe=649EAA9D" alt="" />
        </div >
    );
}