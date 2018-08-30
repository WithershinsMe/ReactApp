        cd reactapp
        npm start  
        
        cd reactapp
        cd ios
        
        sudo lsof -i :8081   查看8081端口的观察者
        kill -9 54111  kill掉观察者
        
        react-native start --port=8088
        
        update React Native到最新的版本
        需要更新react-native, react, and expo，setting the correct sdkVersion in app.json
        
        
        This will automatically remove all console.* calls in the release (production) versions of your project.
        npm i babel-plugin-transform-remove-console --save-dev
        .babelrc  
        {
          "env": {
            "production": {
            "plugins": ["transform-remove-console"]
             }
           }
        }
         
         
        Use the new FlatList or SectionList 代替ListView
        如果FlatList渲染慢，用 getItemLayout可以优化渲染速度，by skipping measurement of the rendered items

        如果用了ListView,应该实现rowHasChanged function，reduce a lot of work by quickly determining whether or not a row needs to be re-rendered.

        应该implement shouldComponentUpdate and indicate the exact conditions under which you would like the component to re-render.
        
        用InteractionManager，如果动画延迟高，考虑用LayoutAnimation
        
        The Animated API currently calculates each keyframe on-demand on the JavaScript thread unless you set useNativeDriver: true，while LayoutAnimation leverages Core Animation and is unaffected by JS thread and main thread frame drops.
        
          LayoutAnimation动画不能被打断，如果需要实现打断的动画，应该颖Animated
         if it must be interruptible, you will need to use Animated
         
         iOS上调整大图片的宽度和高度将会very expensive，应该用use the transform: [{scale}] style property to animate the size
         
         按钮onPress function返回之后才会显示高亮，解决方法
         handleOnPress() {
           // Always use TimerMixin with requestAnimationFrame, setTimeout and
           // setInterval
            this.requestAnimationFrame(() => {
                this.doExpensiveAction();
            });
         }

         Navigator animations  transition发生在JavaScript线程，考虑用React Navigation和Animated库来做
         
         Inline相当于lazy,延迟值到被调用
         Inline requires delay the requiring of a module or file until that file is actually needed


         On iOS unbundling will create a single indexed file that react native will load one module at a time. On Android, by default it will create a set of files for each module.
         
         Enable unbundling in Xcode by editing the build phase "Bundle React Native code and images". Before ../node_modules/react-native/packager/react-native-xcode.sh add export BUNDLE_COMMAND="unbundle":
         
         预加载moduls
         Luckily we can configure a portion of the modules to be preloaded.
         
         
