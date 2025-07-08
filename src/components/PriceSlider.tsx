import { FC, useEffect, useRef, useCallback } from "react";

type Props = {
  min: number;
  max: number;
  currentMin: number;
  currentMax: number;
  onChange: (min: number, max: number) => void;
};

const PriceSlider: FC<Props> = ({ min, max, currentMin, currentMax, onChange }) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderInstance = useRef<any>(null);
  const isUserInteracting = useRef(false);
  const animationFrameRef = useRef<number | null>(null);
  const lastEmittedValues = useRef({ min: currentMin, max: currentMax });

  // Optimized onChange using requestAnimationFrame
  const optimizedOnChange = useCallback(
    (minVal: number, maxVal: number) => {
      // Solo emitir si los valores han cambiado
      if (lastEmittedValues.current.min !== minVal || lastEmittedValues.current.max !== maxVal) {
        lastEmittedValues.current = { min: minVal, max: maxVal };

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          onChange(minVal, maxVal);
        });
      }
    },
    [onChange],
  );

  useEffect(() => {
    if (sliderRef.current && typeof window !== "undefined") {
      // Importar noUiSlider dinámicamente para evitar errores de SSR
      import("nouislider").then((noUiSlider) => {
        if (sliderRef.current && !sliderInstance.current) {
          sliderInstance.current = noUiSlider.create(sliderRef.current, {
            start: [currentMin, currentMax],
            connect: true,
            step: 1,
            range: {
              min: min,
              max: max,
            },
            format: {
              from: function (value: string) {
                return parseInt(value);
              },
              to: function (value: number) {
                return Math.round(value);
              },
            },
          });

          // Listener para detectar cuando el usuario empieza a interactuar
          sliderInstance.current.on("start", () => {
            isUserInteracting.current = true;
          });

          // Listener para detectar cuando el usuario termina de interactuar
          sliderInstance.current.on("end", () => {
            isUserInteracting.current = false;
            // Enviar el valor final inmediatamente cuando el usuario suelta
            const values = sliderInstance.current.get();
            const minVal = parseInt(values[0]);
            const maxVal = parseInt(values[1]);

            // Cancelar cualquier animación pendiente y enviar inmediatamente
            if (animationFrameRef.current) {
              cancelAnimationFrame(animationFrameRef.current);
            }
            lastEmittedValues.current = { min: minVal, max: maxVal };
            onChange(minVal, maxVal);
          });

          // Listener para actualizaciones durante el movimiento - MUY reducido
          sliderInstance.current.on("update", (values: string[]) => {
            if (isUserInteracting.current) {
              const minVal = parseInt(values[0]);
              const maxVal = parseInt(values[1]);
              optimizedOnChange(minVal, maxVal);
            }
          });
        }
      });
    }

    // Cleanup al desmontar
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (sliderInstance.current) {
        sliderInstance.current.destroy();
        sliderInstance.current = null;
      }
    };
  }, [min, max, optimizedOnChange]);

  // Sincronización externa más inteligente
  useEffect(() => {
    if (sliderInstance.current && !isUserInteracting.current) {
      const currentValues = sliderInstance.current.get();
      const currentMinVal = parseInt(currentValues[0]);
      const currentMaxVal = parseInt(currentValues[1]);

      // Solo actualizar si los valores son significativamente diferentes
      if (Math.abs(currentMinVal - currentMin) > 0 || Math.abs(currentMaxVal - currentMax) > 0) {
        // Usar requestAnimationFrame para hacer la actualización más suave
        requestAnimationFrame(() => {
          if (sliderInstance.current && !isUserInteracting.current) {
            sliderInstance.current.set([currentMin, currentMax]);
          }
        });
      }
    }
  }, [currentMin, currentMax]);

  return <div ref={sliderRef} className="price-val-range"></div>;
};

export default PriceSlider;
