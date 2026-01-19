import * as Dialog from '@radix-ui/react-dialog';
import { X, Calendar as CalendarIcon, User, Phone, Mail, MessageSquare, Clock, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, addDays, isBefore, startOfToday, isSunday, setHours, setMinutes, isSameDay } from 'date-fns';
import 'react-day-picker/dist/style.css';

export function BookingModal() {
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(1); // 1: Info, 2: Date & Time

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: 'General Checkup',
        message: ''
    });

    // Appointment State
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);

    useEffect(() => {
        const handleOpen = () => {
            setOpen(true);
            setStep(1);
            setSelectedDate(undefined);
            setSelectedTime(null);
        };
        window.addEventListener('open-booking', handleOpen);
        return () => window.removeEventListener('open-booking', handleOpen);
    }, []);

    const timeSlots = useMemo(() => {
        const slots = [];
        for (let hour = 9; hour < 18; hour++) {
            slots.push(`${hour}:00`);
            slots.push(`${hour}:30`);
        }
        return slots;
    }, []);

    const handleSubmit = () => {
        if (!selectedDate || !selectedTime) return;

        const dateStr = format(selectedDate, 'PPPP');
        const whatsappMessage = `Hello Raf Dentals! I would like to book an appointment:%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Service:* ${formData.service}%0A*Date:* ${dateStr}%0A*Time:* ${selectedTime}%0A*Message:* ${formData.message || 'N/A'}`;

        const phoneNumber = '2348033775088';
        window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
        setOpen(false);
    };

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-in fade-in duration-300" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl z-[101] overflow-hidden animate-in zoom-in-95 fade-in duration-300 max-h-[90vh] flex flex-col">
                    {/* Header */}
                    <div className="p-8 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                                <CalendarIcon className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <Dialog.Title className="text-2xl font-bold text-gray-900">
                                    Book an Appointment
                                </Dialog.Title>
                                <Dialog.Description className="text-gray-500 text-sm">
                                    {step === 1 ? 'Tell us about yourself' : 'Choose your preferred slot'}
                                </Dialog.Description>
                            </div>
                        </div>
                        <Dialog.Close className="p-2 rounded-xl hover:bg-gray-100 transition-colors">
                            <X className="w-6 h-6 text-gray-400" />
                        </Dialog.Close>
                    </div>

                    <div className="flex-1 overflow-y-auto p-8 pt-6">
                        {step === 1 ? (
                            /* Step 1: Patient Info */
                            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                placeholder="John Doe"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Phone Number</label>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                required
                                                type="tel"
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                placeholder="0803-377-5088"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                placeholder="john@example.com"
                                                className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all font-medium"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Service Needed</label>
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer font-medium"
                                        >
                                            <option>General Checkup</option>
                                            <option>Teeth Cleaning</option>
                                            <option>Teeth Whitening</option>
                                            <option>Braces & Orthodontics</option>
                                            <option>Dental Implants</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 ml-1 uppercase tracking-wider">Message (Optional)</label>
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                        <textarea
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            rows={3}
                                            placeholder="Tell us about your dental concerns..."
                                            className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all resize-none font-medium"
                                        ></textarea>
                                    </div>
                                </div>

                                <button
                                    onClick={() => formData.name && formData.phone && setStep(2)}
                                    disabled={!formData.name || !formData.phone}
                                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                                >
                                    Select Date & Time
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        ) : (
                            /* Step 2: Date & Time Picker */
                            <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                                <div className="flex flex-col lg:flex-row gap-8">
                                    {/* Calendar */}
                                    <div className="flex-1 bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                                        <DayPicker
                                            mode="single"
                                            selected={selectedDate}
                                            onSelect={setSelectedDate}
                                            disabled={[
                                                { dayOfWeek: [0] }, // Sunday disabled
                                                { before: startOfToday() } // Past dates disabled
                                            ]}
                                            className="mx-auto"
                                            modifiersClassNames={{
                                                selected: 'bg-blue-600 text-white rounded-xl'
                                            }}
                                        />
                                    </div>

                                    {/* Time Slots */}
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-2 mb-4">
                                            <Clock className="w-5 h-5 text-blue-600" />
                                            <h4 className="font-bold text-gray-900 uppercase tracking-wider text-sm">Available Times</h4>
                                        </div>

                                        {!selectedDate ? (
                                            <div className="h-full flex items-center justify-center p-8 text-center text-gray-400 bg-gray-50 rounded-[2rem] border-2 border-dashed border-gray-200">
                                                Please select a date first
                                            </div>
                                        ) : (
                                            <div className="grid grid-cols-3 gap-3">
                                                {timeSlots.map((time) => (
                                                    <button
                                                        key={time}
                                                        onClick={() => setSelectedTime(time)}
                                                        className={`py-3 rounded-xl text-sm font-bold transition-all ${selectedTime === time
                                                                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                                                                : 'bg-white border border-gray-200 text-gray-600 hover:border-blue-300 hover:bg-blue-50'
                                                            }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={() => setStep(1)}
                                        className="flex-[0_0_auto] px-6 bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-5 rounded-2xl transition-all active:scale-[0.98] flex items-center gap-2"
                                    >
                                        <ArrowLeft className="w-5 h-5" />
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        disabled={!selectedDate || !selectedTime}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg"
                                    >
                                        Proceed to WhatsApp
                                        <CheckCircle2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
