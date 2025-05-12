
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const ProgrammingArduinoPage = () => {
    const [relayState, setRelayState] = useState<boolean>(false);
    const [ledState, setLedState] = useState<boolean>(false);
    const [delay, setDelay] = useState<number>(1000); // Valor inicial de retardo en ms
    const [isHighCurrent, setIsHighCurrent] = useState<boolean>(false);
    const [isTimerEnabled, setIsTimerEnabled] = useState<boolean>(false);  // Nuevo estado para habilitar/deshabilitar el temporizador
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Maneja el cambio de estado del relé y el LED
    const toggleRelayAndLED = () => {
        setRelayState(prev => !prev);
        setLedState(prev => !prev);
    };

    // Función para simular el retardo y la activación del relé
    const simulateRelayAction = () => {
        if (isTimerEnabled) { // Solo ejecutar si el temporizador está habilitado
            setRelayState(false); // Simula el relé NC abriéndose
            setLedState(false);
            timerRef.current = setTimeout(() => {
                setRelayState(true); // Simula el relé NC cerrándose después del retardo
                setLedState(true);
            }, delay);
        }
    };

    // Limpieza del timeout al desmontar el componente o al cambiar el retardo
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, [delay, isTimerEnabled]); // Dependencia de isTimerEnabled añadido

    const handleDelayChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newDelay = parseInt(event.target.value, 10);
        if (!isNaN(newDelay) && newDelay >= 0) {
            setDelay(newDelay);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 flex items-center justify-center">
            <Card className="w-full max-w-md bg-gray-800 border-gray-700 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-white">
                        Simulador de Relé Temporizado NE555
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                        Controla un relé y un LED con retardo ajustable
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <Label htmlFor="enable-timer" className="text-gray-300">
                            Habilitar Temporizador
                        </Label>
                        <Switch
                            id="enable-timer"
                            checked={isTimerEnabled}
                            onCheckedChange={setIsTimerEnabled}
                            className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <Label htmlFor="delay" className="text-gray-300">Retardo (ms):</Label>
                        <Input
                            id="delay"
                            type="number"
                            value={delay}
                            onChange={handleDelayChange}
                            className="w-24 bg-gray-700 border-gray-600 text-white"
                            min={0}
                            disabled={!isTimerEnabled} // Deshabilita el input si el temporizador no está habilitado
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Label htmlFor="high-current" className="text-gray-300">
                            Simular Alta Corriente
                        </Label>
                        <Switch
                            id="high-current"
                            checked={isHighCurrent}
                            onCheckedChange={setIsHighCurrent}
                            className="data-[state=checked]:bg-blue-500 data-[state=unchecked]:bg-gray-600"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-300">Estado del Relé:</Label>
                        <div
                            className={cn(
                                "p-2 rounded",
                                relayState ? "bg-green-500 text-white" : "bg-red-500 text-white"
                            )}
                        >
                            {relayState ? 'Cerrado (Conectado)' : 'Abierto (Desconectado)'}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label className="text-gray-300">Estado del LED:</Label>
                        <div
                            className={cn(
                                "p-2 rounded",
                                ledState ? "bg-green-500 text-white" : "bg-red-500 text-white"
                            )}
                        >
                            {ledState ? 'Encendido' : 'Apagado'}
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        onClick={simulateRelayAction}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                        disabled={!isTimerEnabled} // Deshabilita el botón si el temporizador no está habilitado
                    >
                        Activar Relé
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ProgrammingArduinoPage
