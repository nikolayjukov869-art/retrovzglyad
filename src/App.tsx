import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { LivingPhotoShowcase } from './components/LivingPhotoShowcase';
import { PhotoCalculator, PlanId } from './components/PhotoCalculator';
import { ProcessSteps } from './components/ProcessSteps';
import { PricingSection } from './components/PricingSection';
import { MasterBio } from './components/MasterBio';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PhotoEvaluatorModal } from './components/PhotoEvaluatorModal';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal';
import { FloatingActionBar } from './components/FloatingActionBar';

export default function App() {
  const [isEvaluatorOpen, setIsEvaluatorOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId | undefined>(undefined);

  const handleOpenEvaluator = (planId?: PlanId) => {
    setSelectedPlanId(planId);
    setIsEvaluatorOpen(true);
  };

  const handleCloseEvaluator = () => {
    setIsEvaluatorOpen(false);
  };

  const handleOpenPrivacy = () => {
    setIsPrivacyModalOpen(true);
  };

  const handleClosePrivacy = () => {
    setIsPrivacyModalOpen(false);
  };

  return (
    <div
      id="app-root"
      className="min-h-screen relative flex flex-col bg-[#FAF7F2] text-[#1F2022] selection:bg-[#C85A32] selection:text-white"
    >
      {/* Top Header with Navigation */}
      <Navbar onOpenEvaluator={handleOpenEvaluator} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Screen with Primary CTA "Оценить фото" & Interactive Slider */}
        <Hero onOpenEvaluator={handleOpenEvaluator} />

        {/* 2. Core Advantages Block */}
        <Advantages onOpenEvaluator={handleOpenEvaluator} />

        {/* 3. Interactive Before/After Gallery */}
        <BeforeAfterGallery onOpenEvaluator={handleOpenEvaluator} />

        {/* 4. Living Photo Motion Technology Showcase */}
        <LivingPhotoShowcase onOpenEvaluator={handleOpenEvaluator} />

        {/* 5. Online Photo Estimator & Calculator Section */}
        <PhotoCalculator />

        {/* 6. Step-by-step Process Workflow */}
        <ProcessSteps onOpenEvaluator={handleOpenEvaluator} />

        {/* 7. Pricing Packages */}
        <PricingSection onOpenEvaluator={handleOpenEvaluator} />

        {/* 8. Master Bio & Philosophy */}
        <MasterBio onOpenEvaluator={handleOpenEvaluator} />

        {/* 9. Customer Stories & Reviews */}
        <ReviewsSection onOpenEvaluator={handleOpenEvaluator} />

        {/* 10. FAQ Accordion */}
        <FaqSection onOpenEvaluator={handleOpenEvaluator} />
      </main>

      {/* Footer */}
      <Footer onOpenEvaluator={handleOpenEvaluator} onOpenPrivacy={handleOpenPrivacy} />

      {/* Floating Action CTA Bar for quick mobile access */}
      <FloatingActionBar onOpenEvaluator={handleOpenEvaluator} />

      {/* Instant Photo Evaluator Modal */}
      {isEvaluatorOpen && (
        <PhotoEvaluatorModal
          isOpen={isEvaluatorOpen}
          onClose={handleCloseEvaluator}
          initialPlanId={selectedPlanId}
        />
      )}

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={handleClosePrivacy} />
    </div>
  );
}
