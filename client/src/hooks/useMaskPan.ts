import { useMask, type MaskProps } from "@react-input/mask";

export default function useMaskPan(otherProps?: MaskProps) {
  const inputRef = useMask({
    mask: "____ ____ ____ ____ ___",
    replacement: { _: /\d/ },
    ...otherProps,
  });

  return inputRef;
}
