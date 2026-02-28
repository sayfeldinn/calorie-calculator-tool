"use client";

import { useState } from "react";

const HeartPulseIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 text-primary"
    >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
);

export default function Calculator() {
    const [unit, setUnit] = useState<"metric" | "imperial">("metric");
    const [gender, setGender] = useState<"male" | "female">("male");
    const [age, setAge] = useState<string>("");
    const [weight, setWeight] = useState<string>("");
    const [height, setHeight] = useState<string>("");
    const [activity, setActivity] = useState<number>(1.2);
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        const a = parseFloat(age);
        const w = parseFloat(weight);
        const h = parseFloat(height);

        if (isNaN(a) || isNaN(w) || isNaN(h)) return;

        let weightKg = w;
        let heightCm = h;

        if (unit === "imperial") {
            weightKg = w / 2.20462;
            heightCm = h * 2.54;
        }

        const bmr =
            10 * weightKg +
            6.25 * heightCm -
            5 * a +
            (gender === "male" ? 5 : -161);

        const tdee = bmr * activity;
        setResult(Math.round(tdee));
    };

    const getWeightPlaceholder = () => (unit === "metric" ? "Enter your weight in Kg" : "Enter your weight in lbs");
    const getHeightPlaceholder = () => (unit === "metric" ? "Enter your height in Cm" : "Enter your height in Inches");

    const a = parseFloat(age);
    const w = parseFloat(weight);
    const h = parseFloat(height);

    const isAgeValid = a >= 16 && a <= 120;
    const isWeightValid = unit === "metric" ? w >= 20 && w <= 400 : w >= 44 && w <= 880;
    const isHeightValid = unit === "metric" ? h >= 50 && h <= 300 : h >= 20 && h <= 120;
    const isFormValid = !!(age && weight && height && isAgeValid && isWeightValid && isHeightValid);

    return (
        <div className="relative w-full max-w-xl mx-auto">
            <div className="backdrop-blur-2xl bg-white/5 border border-white/10 p-8 rounded-[2rem] shadow-2xl relative overflow-hidden z-10 transition-all duration-500 hover:shadow-primary/5">

                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shadow-[0_0_20px_rgba(204,255,0,0.15)]">
                        <HeartPulseIcon />
                    </div>
                </div>

                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold text-white mb-2 tracking-tight">Daily Calorie Calculator</h2>
                    <p className="text-sm text-slate-400">Calculate your daily calorie requirements based on your profile</p>
                </div>

                {!result ? (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
                        <div className="grid grid-cols-1 sm:grid-cols-[3fr_2fr] gap-4">
                            <div className="flex p-1 bg-white/5 rounded-full border border-white/10 relative overflow-hidden">
                                <button
                                    onClick={() => setUnit("metric")}
                                    className={`flex-1 py-2 px-2 whitespace-nowrap text-sm font-medium rounded-full z-10 transition-all duration-300 ${unit === "metric" ? "text-black" : "text-white hover:text-white/80"}`}
                                >
                                    Metric (Kg / Cm)
                                </button>
                                <button
                                    onClick={() => setUnit("imperial")}
                                    className={`flex-1 py-2 px-2 whitespace-nowrap text-sm font-medium rounded-full z-10 transition-all duration-300 ${unit === "imperial" ? "text-black" : "text-white hover:text-white/80"}`}
                                >
                                    Imperial (lbs / In)
                                </button>
                                <div
                                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-transform duration-300 ease-out shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                                    style={{ transform: unit === "metric" ? "translateX(0)" : "translateX(100%)" }}
                                />
                            </div>

                            <div className="flex p-1 bg-white/5 rounded-full border border-white/10 relative overflow-hidden">
                                <button
                                    onClick={() => setGender("male")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-full z-10 transition-all duration-300 ${gender === "male" ? "text-black" : "text-white hover:text-white/80"}`}
                                >
                                    Male
                                </button>
                                <button
                                    onClick={() => setGender("female")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-full z-10 transition-all duration-300 ${gender === "female" ? "text-black" : "text-white hover:text-white/80"}`}
                                >
                                    Female
                                </button>
                                <div
                                    className="absolute top-1 bottom-1 w-[calc(50%-4px)] bg-primary rounded-full transition-transform duration-300 ease-out shadow-[0_0_10px_rgba(204,255,0,0.5)]"
                                    style={{ transform: gender === "male" ? "translateX(0)" : "translateX(100%)" }}
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Age (years)</label>
                                <input
                                    type="number"
                                    min="1"
                                    max="120"
                                    value={age}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 3) setAge(e.target.value);
                                    }}
                                    placeholder="Enter your age"
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light hover:bg-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Weight ({unit === "metric" ? "kg" : "lbs"})</label>
                                <input
                                    type="number"
                                    min={unit === "metric" ? 20 : 44}
                                    max={unit === "metric" ? 400 : 880}
                                    value={weight}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 4) setWeight(e.target.value);
                                    }}
                                    placeholder={getWeightPlaceholder()}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light hover:bg-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Height ({unit === "metric" ? "cm" : "in"})</label>
                                <input
                                    type="number"
                                    min={unit === "metric" ? 50 : 20}
                                    max={unit === "metric" ? 300 : 120}
                                    value={height}
                                    onChange={(e) => {
                                        if (e.target.value.length <= 3) setHeight(e.target.value);
                                    }}
                                    placeholder={getHeightPlaceholder()}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light hover:bg-white/10 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">Activity Level</label>
                                <div className="relative">
                                    <select
                                        value={activity}
                                        onChange={(e) => setActivity(parseFloat(e.target.value))}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3.5 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all font-light hover:bg-white/10 [&>option]:bg-slate-900 [&>option]:text-white cursor-pointer"
                                    >
                                        <option value={1.2}>Sedentary (office job)</option>
                                        <option value={1.375}>Light Exercise (1-2 days/week)</option>
                                        <option value={1.55}>Moderate Exercise (3-5 days/week)</option>
                                        <option value={1.725}>Heavy Exercise (6-7 days/week)</option>
                                        <option value={1.9}>Athlete (2x per day)</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleCalculate}
                            disabled={!isFormValid}
                            className="w-full py-4 bg-white text-black font-semibold rounded-2xl mt-4 hover:bg-primary hover:shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:shadow-none"
                        >
                            Calculate Calories
                        </button>
                    </div>
                ) : (
                    <div className="space-y-6 animate-in fade-in zoom-in-95 duration-500 ease-out">
                        <div className="p-8 bg-white/5 rounded-3xl border border-white/10 text-center relative overflow-hidden">
                            <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>

                            <p className="text-slate-400 text-sm mb-2 font-medium uppercase tracking-wider">Maintenance Calories</p>
                            <div className="flex items-baseline justify-center gap-2 mb-8">
                                <span className="text-6xl font-bold text-white tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">{result}</span>
                                <span className="text-xl text-primary font-medium">kcal</span>
                            </div>

                            <div className="grid grid-cols-2 gap-4 text-left">
                                <div className="p-5 bg-black/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                    <p className="text-xs text-slate-400 mb-1.5 uppercase tracking-wider font-semibold">Weight Loss</p>
                                    <p className="text-xl font-semibold text-white">{result - 500} <span className="text-xs font-normal text-slate-500">kcal</span></p>
                                </div>
                                <div className="p-5 bg-black/30 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                                    <p className="text-xs text-slate-400 mb-1.5 uppercase tracking-wider font-semibold">Weight Gain</p>
                                    <p className="text-xl font-semibold text-white">{result + 500} <span className="text-xs font-normal text-slate-500">kcal</span></p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => setResult(null)}
                            className="w-full py-4 bg-transparent border-2 border-white/10 text-white font-semibold rounded-2xl hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                        >
                            Recalculate
                        </button>
                    </div>
                )}
            </div>

            {/* Decorative Glow Elements Behind Card */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-emerald-500/20 rounded-full blur-[80px] -z-10"></div>
        </div>
    );
}
