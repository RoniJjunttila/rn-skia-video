import React from 'react';
import { Pressable, useWindowDimensions } from 'react-native';
import { Canvas, ColorMatrix, Fill, ImageShader, useVideo } from '@shopify/react-native-skia';
import { useSharedValue } from 'react-native-reanimated';
import { useAssets } from 'expo-asset';

const useVideoFromAsset = (mod, options) => {
  const [assets, error] = useAssets([mod]);
  if (error) {
    throw error;
  }
  return useVideo(assets ? assets[0].localUri : null, options);
};

const VideoExample = ({ localVideoFile }) => {
  const paused = useSharedValue(false);
  const { width, height } = useWindowDimensions();
  const { currentFrame } = useVideoFromAsset(localVideoFile, { paused });

  return (
    <Pressable style={{ flex: 1 }} onPress={() => (paused.value = !paused.value)}>
      <Canvas style={{ flex: 1 }}>
        <Fill>
          <ImageShader
            image={currentFrame}
            x={0}
            y={0}
            width={width}
            height={height}
            fit="cover"
          />
          <ColorMatrix
            matrix={[
              0.95, 0, 0, 0, 0.05,
              0.65, 0, 0, 0, 0.15,
              0.15, 0, 0, 0, 0.5,
              0, 0, 0, 1, 0,
            ]}
          />
        </Fill>
      </Canvas>
    </Pressable>
  );
};

export default VideoExample;
