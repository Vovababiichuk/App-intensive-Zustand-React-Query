import styles from './Typography.module.css'

type TypographyVariant = string;
type TypographyTag = 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div' | 'p';

export type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<Tag> & {
	variant: TypographyVariant;
	tag?: TypographyTag;
	children: React.ReactNode;
}

export const Typography = <Tag extends TypographyTag = 'div'>({
	variant,
	tag = 'div',
	children
}: TypographyProps<Tag>) => {
	const Component = tag ?? 'div';

	return (
		<Component className={styles[variant]}>
			{children}
		</Component>
	);
};
