import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wand2, Sparkles, ImageIcon } from 'lucide-react';

interface AIFeaturesProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (text: string) => void;
}

const AIFeatures: React.FC<AIFeaturesProps> = ({ isOpen, onClose, onGenerate }) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    // Simulate AI generation
    setTimeout(() => {
      onGenerate(`Generated content for: ${prompt}`);
      setLoading(false);
      setPrompt('');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          className="fixed top-0 right-0 w-96 h-full bg-white shadow-2xl z-50"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">AI Features</h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Content Generation */}
              <div className="space-y-4">
                <h3 className="font-medium flex items-center space-x-2">
                  <Wand2 className="w-5 h-5" />
                  <span>Generate Content</span>
                </h3>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe what you want to generate..."
                  className="w-full h-32 p-3 border rounded-lg resize-none"
                />
                <button
                  onClick={handleGenerate}
                  disabled={loading || !prompt}
                  className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
                >
                  {loading ? 'Generating...' : 'Generate'}
                </button>
              </div>

              {/* Content Enhancement */}
              <div className="space-y-4">
                <h3 className="font-medium flex items-center space-x-2">
                  <Sparkles className="w-5 h-5" />
                  <span>Enhance Content</span>
                </h3>
                <button className="w-full py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
                  Improve Writing
                </button>
                <button className="w-full py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
                  Fix Grammar
                </button>
              </div>

              {/* Image Generation */}
              <div className="space-y-4">
                <h3 className="font-medium flex items-center space-x-2">
                  <ImageIcon className="w-5 h-5" />
                  <span>Generate Images</span>
                </h3>
                <input
                  type="text"
                  placeholder="Describe the image you want..."
                  className="w-full p-3 border rounded-lg"
                />
                <button className="w-full py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50">
                  Generate Image
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIFeatures;