import { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useBooking } from '../../context/BookingContext';
import { Calendar, Clock, ChevronRight, ChevronLeft, CheckCircle2, User, Mail, Building2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM"
];

// Generate next 5 days
const getDays = () => {
  const days = [];
  const today = new Date();
  for (let i = 1; i <= 5; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    // Skip weekends for business demo
    if (nextDay.getDay() !== 0 && nextDay.getDay() !== 6) {
        days.push(nextDay);
    }
  }
  return days;
};

const availableDays = getDays();

export const BookingModal = () => {
  const { isBookingOpen, closeBooking } = useBooking();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleNext = () => {
    if (step === 1 && selectedDate && selectedTime) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(3);
    }, 1500);
  };

  const resetFlow = () => {
    setStep(1);
    setSelectedDate(null);
    setSelectedTime(null);
    setFormData({ name: '', email: '', company: '' });
    closeBooking();
  };

  return (
    <Modal 
      isOpen={isBookingOpen} 
      onClose={resetFlow}
      title={step === 3 ? "Booking Confirmed" : "Book a Demo"}
    >
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {/* STEP 1: Date & Time Selection */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              <div className="text-center mb-6">
                <p className="text-gray-600">Select a date and time for your 30-minute product walkthrough.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Date Selection */}
                <div>
                  <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-lime-600" /> Select Date
                  </h4>
                  <div className="space-y-2">
                    {availableDays.map((date, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDateSelect(date)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-xl border transition-all flex justify-between items-center",
                          selectedDate?.toDateString() === date.toDateString()
                            ? "border-lime bg-lime/10 text-navy font-semibold shadow-sm"
                            : "border-gray-100 hover:border-lime/50 hover:bg-gray-50 text-gray-600"
                        )}
                      >
                        <span>{date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
                        {selectedDate?.toDateString() === date.toDateString() && <CheckCircle2 className="w-4 h-4 text-lime-600" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Time Selection */}
                <div className={cn("transition-opacity duration-300", !selectedDate && "opacity-50 pointer-events-none")}>
                  <h4 className="font-bold text-navy mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-lime-600" /> Select Time
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "px-2 py-2 rounded-lg text-sm border transition-all text-center",
                          selectedTime === time
                            ? "bg-navy text-white border-navy"
                            : "border-gray-200 hover:border-navy text-gray-600"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-100 flex justify-end">
                <Button 
                  onClick={handleNext} 
                  disabled={!selectedDate || !selectedTime}
                  className="gap-2"
                >
                  Next Step <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Details Form */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="bg-cool-grey/50 p-4 rounded-xl mb-6 flex items-center justify-between">
                <div>
                    <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Selected Slot</div>
                    <div className="font-semibold text-navy">
                        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} at {selectedTime}
                    </div>
                </div>
                <button onClick={() => setStep(1)} className="text-sm text-lime-600 font-medium hover:underline">Change</button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      required 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none" 
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Work Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      required 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none" 
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Company / Organization</label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input 
                      required 
                      type="text" 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lime focus:border-transparent outline-none" 
                      placeholder="Ministry of Education"
                    />
                  </div>
                </div>

                <div className="pt-6 flex gap-3">
                  <Button type="button" variant="outline" onClick={() => setStep(1)}>
                    <ChevronLeft className="w-4 h-4 mr-2" /> Back
                  </Button>
                  <Button type="submit" className="flex-1" isLoading={isSubmitting}>
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </motion.div>
          )}

          {/* STEP 3: Success */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-lime-600" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy mb-2">You're Booked!</h3>
              <p className="text-gray-600 mb-8 max-w-sm mx-auto">
                We've sent a calendar invitation to <strong>{formData.email}</strong>. We look forward to showing you Emporia.
              </p>
              <div className="bg-gray-50 p-6 rounded-xl mb-8 max-w-sm mx-auto border border-gray-100">
                <div className="font-bold text-navy text-lg mb-1">Emporia Demo</div>
                <div className="text-gray-500">
                   {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                   <br />
                   {selectedTime}
                </div>
              </div>
              <Button onClick={resetFlow} className="w-full max-w-xs">
                Close
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Modal>
  );
};
