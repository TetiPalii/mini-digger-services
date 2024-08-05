export const Icon = ({ width = '24px', height = '24px', iconName, className = '' }: { width: string, height: string, iconName: string, className?: string }) => {
    return <svg width={width} height={height} fill="#fff" className="hover:fill-red-900 transition-colors" >
        <use xlinkHref={`/icons.svg#icon-${iconName}`} />
    </svg>
}