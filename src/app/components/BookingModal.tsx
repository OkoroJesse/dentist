import * as Dialog from '@radix-ui/react-dialog';
import { X, Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

export function BookingModal() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setOpen(true);
        window.addEventListener('open-booking', handleOpen);
        return () => window.removeEventListener('open-booking', handleOpen);
    }, []);

    return (
        <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] animate-in fade-in duration-300" />
                <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden animate-in zoom-in-95 fade-in duration-300">
                    <div className="relative p-6">
                        <Dialog.Close className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors">
                            <X className="w-5 h-5 text-gray-500" />
                        </Dialog.Close>

                        <div className="mb-6">
                            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                                <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <Dialog.Title className="text-xl font-bold text-gray-900 mb-1">
                                Book an Appointment
                            </Dialog.Title>
                            <Dialog.Description className="text-sm text-gray-600">
                                Fill out the form below and we'll get back to you within 2 hours to confirm your visit.
                            </Dialog.Description>
                        </div>

                        <form
                            className="space-y-3"
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.currentTarget as HTMLFormElement);
                                const name = formData.get('name') as string;
                                const phone = formData.get('phone') as string;
                                const email = formData.get('email') as string;
                                const service = formData.get('service') as string;
                                const message = formData.get('message') as string;

                                const whatsappMessage = `Hello Raf Dentals! I would like to book an appointment:%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Email:* ${email}%0A*Service:* ${service}%0A*Message:* ${message || 'N/A'}`;

                                // Replace with actual phone number if provided
                                const phoneNumber = '2348140695734';
                                window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
                                setOpen(false);
                            }}
                        >
                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                                <div className="relative">
                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                    <input
                                        required
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                    <div className="relative">
                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            placeholder="0814-069-5734"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Service</label>
                                <select
                                    name="service"
                                    className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 px-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                                >
                                    <option>General Checkup</option>
                                    <option>Teeth Cleaning</option>
                                    <option>Teeth Whitening</option>
                                    <option>Braces & Orthodontics</option>
                                    <option>Dental Implants</option>
                                </select>
                            </div>

                            <div className="space-y-1">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Message (Optional)</label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-gray-400" />
                                    <textarea
                                        name="message"
                                        rows={2}
                                        placeholder="Tell us about your dental concerns..."
                                        className="w-full bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-95 mt-2"
                            >
                                Confirm Booking Request
                            </button>
                        </form>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
